import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 
import { useTranslations } from 'use-intl';

export default function GoogleVideo({ src, title = "Video", showThumbnail = false }) {
    const t = useTranslations('components.proyectos');
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(src);

    if (!videoId) return <p className="text-danger">{t('ttl1')}</p>;

    if (showThumbnail) {
        return (
            <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '15px',
                backgroundColor: '#000'
            }}>
                <img 
                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    alt={title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.8 
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '3rem',
                    color: 'white',
                    opacity: 0.8
                }}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
            </div>
        );
    }

    return (
        <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#000000'
        }}>
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
            ></iframe>
        </div>
    );
}