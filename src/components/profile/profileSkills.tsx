import profileConfig from "../../config/profilConfig.json";

export default function ProfileSkills() {
    return (
        <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
            <h2 className="text-2xl text-arcade-pink mb-4">SKILLS</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profileConfig.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex items-center text-arcade-blue p-2 border border-arcade-pink rounded"
                    >
                        <div className="w-2 h-2 bg-arcade-pink mr-2"></div>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}