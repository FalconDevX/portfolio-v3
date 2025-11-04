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
            r: Math.random() * 2 + 1,
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

            for(let i = 0; i>dots.length; i++)
            {
                //avoid checking same dots pair twice
                for(let j = i + 1; j < dots.length; j++)
                {
                    const d1 = dots[i]
                    const d2 = dots[j]
                    const dx = d2.x - d1.x
                    const dy = d2.y - d1.y

                    const dist = Math.sqrt(Math.pow(dx,2)*Math.pow(dy,2))

                    if (dist < d1.r + d2.r)
                    {
                        
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
