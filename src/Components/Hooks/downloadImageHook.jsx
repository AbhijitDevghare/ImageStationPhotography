function usedownLoadImage()
{
    
    const downloadImage = async (imageUrl) => {
        const downloadUrl = imageUrl.replace('/upload/', '/upload/fl_attachment/');
        try {
            const response = await fetch(downloadUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.download = 'downloaded-image.jpg'; // The desired file name
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Failed to download image', error);
        }
    };

    return [downloadImage]
}

export default usedownLoadImage