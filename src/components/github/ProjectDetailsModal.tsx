import { PinnedRepositoryData } from "./githubQuery";

export default function ProjectDetailModal({ repo }:
    { repo: PinnedRepositoryData }
) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        </div>
    );
}