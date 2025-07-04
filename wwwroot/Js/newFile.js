window.canvasDrag = {
    initialize: (canvasId) => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        // Mejor: usar pointer events para compatibilidad táctil
        canvas.addEventListener('pointerdown', (e) => {
            if (e.target.classList.contains('canvas-item')) {
                selected = e.target;
                canvasRect = canvas.getBoundingClientRect();
                const rect = selected.getBoundingClientRect();
                offset.x = e.clientX - rect.left;
                offset.y = e.clientY - rect.top;
                // Llevar al frente
                selected.style.zIndex = 1000;
                // Prevenir selección de texto
                document.body.style.userSelect = 'none';
            }
        });

        document.addEventListener('pointermove', (e) => {
            if (selected) {
                let x = e.clientX - offset.x - canvasRect.left;
                let y = e.clientY - offset.y - canvasRect.top;
                // Restringir dentro del canvas
                x = Math.max(0, Math.min(x, canvasRect.width - selected.offsetWidth));
                y = Math.max(0, Math.min(y, canvasRect.height - selected.offsetHeight));
                selected.style.position = 'absolute';
                selected.style.left = `${x}px`;
                selected.style.top = `${y}px`;
            }
        });

        document.addEventListener('pointerup', () => {
            if (selected) {
                selected.style.zIndex = '';
                selected = null;
                document.body.style.userSelect = '';
            }
        });
    }
};
