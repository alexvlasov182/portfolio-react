'use client';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

export default function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (scrollPosition >= top) {
          current = id;
        } else {
          break;
        }
      }

      if (current !== active) {
        setActive(current);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, active]);

  return active;
}
