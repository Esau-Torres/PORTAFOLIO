export default function GoogleDrive({driveLink, title}) {
const getVideoId = (url) => {
        try {
            const id = url.split('/d/')[1].split('/')[0];
            return id;
        } catch (error) {
            console.error("Enlace de Drive inválido", error);
            return null;
        }
    };

    const videoId = getVideoId(driveLink);

    if (!videoId) return <p className="text-danger">Enlace de video inválido</p>;

    return (
        <div style={{
            position: 'relative',
            paddingBottom: '56.25%', /* Ratio 16:9 */
            height: 0,
            overflow: 'hidden',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)'
        }}>
            <iframe
                src={`https://drive.google.com/file/d/${videoId}/preview`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0
                }}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={title}
            ></iframe>
        </div>
    );
}