import Project from "./Project"

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 gap-10">
            <Project
                title="RenderX - GPU ecomerce"
                image="renderx.png"
                github="https://github.com/FalconDevX/renderx-frontend"
                description={
                    <p className="text-gray-400">
                        Full-featured e-commerce platform for computer hardware products.
                        The application enables users to browse and search through product catalogs,
                        view detailed product information with ratings and specifications,
                        and manage their accounts through secure authentication.
                        <br /><br />
                        Key features include an interactive homepage with auto-rotating featured product
                        carousels, advanced product filtering and sorting capabilities (by price, relevance,
                        and customer ratings), product detail pages with comprehensive information,
                        and a responsive design that works seamlessly across all devices.
                        <br /><br />
                        The platform maintains user sessions and shopping preferences, providing
                        a personalized shopping experience.
                    </p>
                }
            />
            <Project title="Hermes AI" 
                image="/HermesAI.png"
                github="https://github.com/FalconDevX/hermes-ai-agent"
                description={
                <p className="text-gray-400">
                    An intelligent console agent connected to Gemini that manages a Google Calendar in real time based on natural-language prompts.
                    <br/> <br/> The system uses Google Gemini API to interpret user input and Google Calendar API to perform event operations.
                    Built on an AI router architecture that classifies user commands and converts them into function calls compatible with Google Calendar API schemas.
                    <br/> <br/> Features include creating, listing, and deleting events with automatic date/time parsing, calendar switching, and event customization (colors, reminders).
                    <br/> <br/> The application implements OAuth 2.0 authentication and maintains conversation context through message history.
                    The application implements OAuth 2.0 authentication and maintains conversation context through message history.
                </p>
            } />
            
            <Project title="Bee parasite visual detector" 
                image="/Bee.png"
                github="https://github.com/FalconDevX/bee-varroa-destructor"
                description={
                <p className="text-gray-400">
                    Developed a deep learning-based object detection system using YOLOv8 for automated bee detection and tracking in video sequences. 
                    <br/> <br/> Implemented a comprehensive data preprocessing pipeline that converts CSV annotations to YOLO format, including bounding box coordinate normalization and validation. 
                    Built a robust dataset preparation system with automated train/validation split (80/20) processing over 8,000+ annotated images. 
                    <br/> <br/> Designed and executed model training workflows using Ultralytics YOLO framework, achieving efficient detection performance. 
                    The project demonstrates expertise in computer vision, deep learning, Python programming, and data preprocessing for machine learning applications.
                </p>
            } />
        </div>
    )
}

export default Projects