"use client";
import { useEffect, useRef } from "react";

export default function FloatingDots() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        //full window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // creating 250 dot array
        const dots = Array.from({ length: 250 }, () => ({
            //dot position
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            //dot size
            r: Math.random() * 4 + 1,
            //dot speed 
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25
        }));

        //drawing function clear everything before iteration
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //dot changin posiition according to own speed
            dots.forEach(d => {
                d.x += d.vx;
                d.y += d.vy;

                //teleport dot to the other side of tghe screen
                if (d.x < 0) d.x = canvas.width;
                if (d.x > canvas.width) d.x = 0;
                if (d.y < 0) d.y = canvas.height;
                if (d.y > canvas.height) d.y = 0;

                //dot color and alpha
                ctx.fillStyle = "rgba(255,255,255,0.35)";
                ctx.beginPath();
                //draw circle
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

                    if (dist < d1.r + d2.r) {
                        const angle = Math.atan2(dy, dx);
                        const n_x = Math.cos(angle)
                        const n_y = Math.sin(angle)

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

                    }
                }
            }



            //run animation
            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    //return canvas
    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
