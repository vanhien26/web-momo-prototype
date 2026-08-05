/**
 * GSAP helpers — import in Astro <script> tags (client-side only).
 * Usage: import { fadeInUp, staggerIn, countUp } from '@lib/gsap';
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** Fade + slide up on scroll enter. Call once per page. */
export function fadeInUp(selector: string, options?: { y?: number; duration?: number; stagger?: number }) {
  const { y = 20, duration = 0.5, stagger = 0.08 } = options ?? {};
  gsap.from(selector, {
    opacity: 0,
    y,
    duration,
    stagger,
    ease: 'power2.out',
    scrollTrigger: { trigger: selector, start: 'top 88%' },
  });
}

/** Stagger children into view. */
export function staggerIn(parent: string, child: string, options?: { stagger?: number; duration?: number }) {
  const { stagger = 0.07, duration = 0.4 } = options ?? {};
  gsap.from(`${parent} ${child}`, {
    opacity: 0,
    y: 14,
    duration,
    stagger,
    ease: 'power2.out',
    scrollTrigger: { trigger: parent, start: 'top 85%' },
  });
}

/** Animate a numeric counter from 0 to target. */
export function countUp(el: HTMLElement, target: number, options?: { duration?: number; delay?: number }) {
  const { duration = 1, delay = 0 } = options ?? {};
  gsap.from({ val: 0 }, {
    val: target,
    duration,
    delay,
    ease: 'power2.out',
    onUpdate() { el.textContent = Math.round((this as any).targets()[0].val).toLocaleString('vi-VN'); },
  });
}

/** Pin a hero section while content scrolls past. */
export function pinHero(trigger: string, end = '+=400') {
  ScrollTrigger.create({ trigger, pin: true, start: 'top top', end });
}
