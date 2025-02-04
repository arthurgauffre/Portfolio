import profileConfig from '../../config/profilConfig.json';

export default function BioProfile() {
    return (
        <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
            <h2 className="text-2xl text-arcade-pink mb-4">PROFILE SUMMARY</h2>
            <p className="text-arcade-blue leading-relaxed">
                {profileConfig.bio}
            </p>
        </div>
    );
}