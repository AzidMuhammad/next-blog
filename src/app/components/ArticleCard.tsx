export default function ArticleCard() {
    return (
        <div className="relative max-w-[995px] mx-auto md:-mt-32 p-6 bg-white rounded-lg">
            <div className="flex items-center space-x-4">
                <img src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="" className="w-20 h-20 rounded-full" />
                <div>
                    <p className="text-[#622A0F] font-semibold">Azid Muhammad</p>
                    <p className="text-gray-500 text-base">FEBRUARY 20, 2025 | TECHNOLOGY</p>
                </div>
            </div>

            <p className="mt-2 italic text-gray-600 text-xl">
                AI is no longer just a concept – it’s transforming industries, reshaping economies, and redefining how we live and work.
            </p>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-2xl font-bold">Table of Contents</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-xl font-bold">
                    <li><a href="#ai-industries" className="text-[#622A0F]">AI Transforming Industries</a></li>
                    <li><a href="#economic-impact" className="text-[#622A0F]">Economic & Job Market Impact</a></li>
                    <li><a href="#case-studies" className="text-[#622A0F]">Case Studies: AI in Real Life</a></li>
                    <li><a href="#future-trends" className="text-[#622A0F]">Future Trends in AI (2025 - 2030)</a></li>
                    <li><a href="#ai-challenges" className="text-[#622A0F]">Challenges & Ethical Concerns</a></li>
                    <li><a href="#how-to-adapt" className="text-[#622A0F]">How to Adapt to AI</a></li>
                </ul>
            </div>

            <div id="ai-industries" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">How AI is Transforming Industries</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    Artificial Intelligence (AI) is driving a major shift in multiple industries, enhancing efficiency and innovation. Here are some of the key sectors that have been transformed:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-xl">
                    <li><strong>Healthcare:</strong> AI-powered diagnostics and robotic surgery improve patient outcomes, assisting doctors in detecting diseases more accurately and efficiently.</li>
                    <li><strong>Finance:</strong> AI-driven fraud detection prevents billions in financial losses, automating risk analysis and ensuring more secure transactions.</li>
                    <li><strong>Education:</strong> AI-based learning platforms personalize student experiences, offering adaptive learning modules tailored to individual student needs.</li>
                    <li><strong>Retail:</strong> AI-driven recommendation engines increase e-commerce sales, providing a more customized shopping experience for consumers.</li>
                    <li><strong>Manufacturing:</strong> AI-powered automation optimizes supply chains, enhances production efficiency, and reduces operational costs.</li>
                </ul>
            </div>

            <div id="economic-impact" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Economic Impact & AI in the Job Market</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    AI is projected to contribute <strong>$15.7 trillion</strong> to the global economy by 2030. While it enhances productivity, it also raises concerns about job displacement. Many industries are adopting AI to optimize operations, but this shift demands workforce adaptation through reskilling and upskilling programs.
                </p>
            </div>

            <div id="case-studies" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Case Studies: AI in Real Life</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    AI is already impacting real-world applications. For example, AI-powered self-driving cars by Tesla are revolutionizing transportation, while AI chatbots in customer service are improving response efficiency.
                </p>
            </div>

            <div id="future-trends" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Future Trends in AI (2025 - 2030)</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    The future of AI looks promising, with developments such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li><strong>AI-Powered Robotics:</strong> Machines will replace labor-intensive jobs, enhancing workplace efficiency.</li>
                    <li><strong>Brain-Computer Interfaces:</strong> AI will help connect human minds with technology, revolutionizing communication and healthcare.</li>
                    <li><strong>AI-Driven Creativity:</strong> AI is increasingly being used in music, art, and content generation, pushing the boundaries of creativity.</li>
                </ul>
            </div>

            <div id="ai-challenges" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">Challenges & Ethical Concerns</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    While AI has numerous benefits, it also poses ethical concerns such as data privacy, bias in decision-making, and potential misuse of technology.
                </p>
            </div>

            <div id="how-to-adapt" className="mt-6">
                <h3 className="text-2xl font-bold text-gray-900">How to Adapt to AI</h3>
                <p className="mt-2 text-gray-700 text-xl">
                    To stay relevant in the AI-driven world, professionals should focus on upskilling in data science, machine learning, and AI ethics. Companies should also implement AI responsibly, ensuring transparency and fairness in AI-driven decisions.
                </p>
            </div>
        </div>
    );
}