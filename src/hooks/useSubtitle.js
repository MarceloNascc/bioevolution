import { useEffect } from 'react';

export default function useSubtitle() {
  useEffect(() => {
    function handleScroll(e) {
      const subtitles = document.getElementsByClassName('subtitle');

      Array.prototype.map.call(subtitles, elem => {
        const { y } = elem.getBoundingClientRect();
        if (y === 0) {
          elem.style.backgroundColor = '#36E332';
          elem.style.color = '#FFFFFF';
        } else {
          elem.style.backgroundColor = 'initial';
          elem.style.color = '#000000';
        }
      });
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return [];
}