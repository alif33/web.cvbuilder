import html2canvas from 'html2canvas';

export const downloadImage = async() => {
    const element = document.getElementById('resume'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/jgep'),
    link = document.createElement('a');

    link.href = data;
    link.download = 'downloaded-image.jpeg';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};