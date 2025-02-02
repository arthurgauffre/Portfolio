import profileConfig from "../../config/profilConfig.json";

export default function SocialLinks() {
    return (
        <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
            <h2 className="text-2xl text-arcade-pink mb-4">LINKS</h2>
            <div className="flex flex-col space-y-3">
                <a
                    href={profileConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors"
                >
                    GitHub
                </a>
                <a
                    href={profileConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}