document.querySelector('form').addEventListener('change', () => {
    const topLeft = document.querySelector('input[name="TopLeft"]').value || '0';
    const topRight = document.querySelector('input[name="TopRight"]').value || '0';
    const bottomLeft = document.querySelector('input[name="BottomLeft"]').value || '0';
    const bottomRight = document.querySelector('input[name="BottomRight"]').value || '0';

    document.querySelector('div.block').style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    document.querySelector('p#code').innerText = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
});