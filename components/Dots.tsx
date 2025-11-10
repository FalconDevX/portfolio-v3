"use client";
import { useEffect, useRef } from "react";

export default function Dots() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const whiteColor = "rgba(255,255,255,0.4)";
    const pinkColor = "rgba(219,39,119,0.4)";
    const yellowColor = "rgba(252, 211, 77,0.4)";

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        
        let dots: any[] = [];
        let animationId: number;
        
        const getDotCount = () => {
            const w = window.innerWidth;
            if (w < 640) return 60;
            if (w < 1024) return 120;
            if (w < 1440) return 180;
            return 250;
        };
        
        const getMaxDistance = () => {
            return window.innerWidth < 768 ? 100 : 80;
        };
        
        const initDots = () => {
            const count = getDotCount();
            dots = Array.from({ length: count }, () => {
                let vx, vy;

                do {
                    vx = (Math.random() - 0.5) * 0.8;
                } while (Math.abs(vx) < 0.1);

                do {
                    vy = (Math.random() - 0.5) * 0.8;
                } while (Math.abs(vy) < 0.1);

                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 3 + 2,
                    vx,
                    vy,
                    color: whiteColor
                };
            });
        };
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };
        
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const maxDist = getMaxDistance();
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.shadowBlur = 10;
            dots.forEach(d => {
                d.x += d.vx;
                d.y += d.vy;

                if (d.x < 0) d.x = canvas.width;
                if (d.x > canvas.width) d.x = 0;
                if (d.y < 0) d.y = canvas.height;
                if (d.y > canvas.height) d.y = 0;

                ctx.fillStyle = d.color;
                ctx.shadowColor = d.color;
                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const d1 = dots[i];
                    const d2 = dots[j];
                    const dx = d2.x - d1.x;
                    const dy = d2.y - d1.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if(Math.abs(dist) < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(d1.x, d1.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.strokeStyle = "rgba(255,255,255,0.1)";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }

                    if (dist < d1.r + d2.r) {
                        const angle = Math.atan2(dy, dx);
                        const n_x = Math.cos(angle);
                        const n_y = Math.sin(angle);

                        const dot1 = d1.vx * n_x + d1.vy * n_y;
                        const dot2 = d2.vx * n_x + d2.vy * n_y;

                        d1.vx = d1.vx - 2 * dot1 * n_x;
                        d1.vy = d1.vy - 2 * dot1 * n_y;

                        d2.vx = d2.vx - 2 * dot2 * n_x;
                        d2.vy = d2.vy - 2 * dot2 * n_y;

                        const overlap = (d1.r + d2.r) - dist;

                        d1.x -= Math.cos(angle) * overlap / 2;
                        d1.y -= Math.sin(angle) * overlap / 2;
                        d2.x += Math.cos(angle) * overlap / 2;
                        d2.y += Math.sin(angle) * overlap / 2;

                        if (d1.color === whiteColor && d2.color === whiteColor) {
                            d1.color = pinkColor;
                            d2.color = pinkColor;
                        }
                        else if (d1.color === pinkColor && d2.color === pinkColor) {
                            d1.color = yellowColor;
                            d2.color = yellowColor;
                        }
                        else if (d1.color === yellowColor && d2.color === yellowColor) {
                            d1.color = whiteColor;
                            d2.color = whiteColor;
                        }
                    }
                }
            }

            animationId = requestAnimationFrame(draw);
        };

        draw();
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}