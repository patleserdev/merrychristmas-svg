document.querySelectorAll('.snow').forEach(snowContainer => {
    function createSnowflake(container) {
      const snowflake = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const radius = Math.random() * 2 + 1;
      const startX = Math.random() * 262;
      const duration = Math.random() * 5 + 3;
  
      snowflake.setAttribute('cx', startX);
      snowflake.setAttribute('cy', -10);
      snowflake.setAttribute('r', radius);
      snowflake.setAttribute('fill', 'white');
      snowflake.style.opacity = Math.random();
  
      snowflake.animate(
        [
          { transform: `translateY(0px)` },
          { transform: `translateY(330px)` }
        ],
        {
          duration: duration * 1000,
          iterations: 1,
          easing: 'linear',
        }
      ).onfinish = () => {
        snowflake.remove();
      };
  
      container.appendChild(snowflake);
    }
  
    function generateSnowflakes(container) {
      setInterval(() => {
        createSnowflake(container);
      }, 300);
    }
  
    generateSnowflakes(snowContainer);
  });
  