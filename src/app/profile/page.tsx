import BioProfile from "@/components/profile/bioProfile";
import profileConfig from "../../config/profilConfig.json";
import ProfilePdf from "@/components/profile/profilePdf";
import ProfileSkills from "@/components/profile/profileSkills";
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
                    <BioProfile />

                    <ProfileSkills />

                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}