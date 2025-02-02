import profileConfig from "../../config/profilConfig.json";
import ProfilePdf from "@/components/profile/profilePdf";
import SocialLinks from "@/components/profile/socialLinks";

export default function Profile() {

    return (
        <div className="w-full h-screen flex flex-row-reverse bg-arcade-darkGrey text-white pixel-font">
            <ProfilePdf />

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center p-8 overflow-y-auto">
                <div className="max-w-4xl w-full space-y-8">
                    {/* Header Section */}
                    <div className="border-b-2 border-arcade-pink pb-4 mb-8">
                        <h1 className="text-4xl text-arcade-pink glow-pink mb-2">
                            {profileConfig.name}
                        </h1>
                        <p className="text-arcade-blue text-xl">{profileConfig.title}</p>
                    </div>

                    {/* Bio Section */}
                    <div className="bg-arcade-dark p-6 rounded-lg border-2 border-arcade-pink">
                        <h2 className="text-2xl text-arcade-pink mb-4">PROFILE SUMMARY</h2>
                        <p className="text-arcade-blue leading-relaxed">
                            {profileConfig.bio}
                        </p>
                    </div>

                    {/* Skills Section */}
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

                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}