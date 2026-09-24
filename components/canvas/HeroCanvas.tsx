"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // prefers-reduced-motion: fundo estático, sem loop de animação
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // Baixo consumo de GPU: pixel ratio limitado a 1.5
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Campo sutil de partículas com paleta térmica da Station
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      { color: new THREE.Color("#10B981"), weight: 0.55 },
      { color: new THREE.Color("#84CC16"), weight: 0.15 },
      { color: new THREE.Color("#FF9F1C"), weight: 0.15 },
      { color: new THREE.Color("#A855F7"), weight: 0.15 },
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      const r = Math.random();
      let acc = 0;
      let c = palette[0].color;
      for (const p of palette) {
        acc += p.weight;
        if (r <= acc) {
          c = p.color;
          break;
        }
      }
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Inércia do mouse: alvo + velocidade que acumula e decai
    const targetRef = { x: 0, y: 0 };
    const velocityRef = { x: 0, y: 0 };
    const damping = 0.045;
    const friction = 0.94;

    const onPointerMove = (e: PointerEvent) => {
      targetRef.x = (e.clientX / window.innerWidth - 0.5) * 0.9;
      targetRef.y = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener("pointermove", onPointerMove);

    // Resize via ResizeObserver no container
    const resizeObserver = new ResizeObserver(() => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
    resizeObserver.observe(container);

    const clock = new THREE.Clock();
    let raf = 0;
    let running = false;

    const render = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Velocidade persegue o alvo (inércia) e sofre atrito
      velocityRef.x += (targetRef.x - velocityRef.x) * damping;
      velocityRef.y += (targetRef.y - velocityRef.y) * damping;
      velocityRef.x *= friction;
      velocityRef.y *= friction;

      points.rotation.y += velocityRef.x * 0.06;
      points.rotation.x += velocityRef.y * 0.06;
      points.rotation.z = Math.sin(t * 0.05) * 0.06;

      render();
    };

    const startLoop = () => {
      if (running || reducedMotion) return;
      running = true;
      clock.getDelta(); // zera o relógio para evitar salto ao retomar
      raf = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Pausa total quando a aba está oculta
    const onVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    if (reducedMotion) {
      // Frame estático, sem animação
      render();
    } else {
      startLoop();
    }

    return () => {
      stopLoop();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
    />
  );
}
