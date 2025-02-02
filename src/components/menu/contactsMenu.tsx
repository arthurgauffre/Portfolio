export default function ContactsMenu() {
    const mail = process.env.NEXT_PUBLIC_MAIL_PRO;
    const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_LINK;
    const github = process.env.NEXT_PUBLIC_GITHUB_LINK;
    const phone = process.env.NEXT_PUBLIC_PHONE;

    return (
        <div className="mt-8 border-t-2 border-[#3a2a55] pt-4">
            <h3 className="text-arcade-pink text-sm mb-3">CONTACTS</h3>
            <div className="space-y-3">
                <div className="text-arcade-blue text-sm">
                    <span className="glow-cyan">{mail}</span>
                </div>
                <div className="text-arcade-blue text-sm">
                    <span className="glow-cyan">{phone}</span>
                </div>
                <a
                    href={linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors text-sm"
                >
                    LinkedIn
                </a>
                <a
                    href={github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-arcade-blue hover:text-arcade-pink transition-colors text-sm"
                >
                    GitHub
                </a>
            </div>
        </div >
    );
}