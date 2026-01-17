import { Layers, Eye, Download } from 'lucide-react';

export default function Features() {
    return (
        <div id="features" className='flex flex-col items-center my-10 scroll-mt-12'>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto">Powerful Features</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Everything you need to create a standout resume that lands interviews.</p>
            
            <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-violet-100 rounded-full flex items-center justify-center">
                        <Layers size={28} className="text-violet-600" strokeWidth={2} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Multiple Templates</h3>
                        <p className="text-sm text-slate-600">Choose from professionally designed templates that showcase your skills effectively.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-green-100 rounded-full flex items-center justify-center">
                        <Eye size={28} className="text-green-600" strokeWidth={2} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Real-Time Preview</h3>
                        <p className="text-sm text-slate-600">See instant updates as you edit your resume with our live preview feature.</p>
                    </div>
                </div>
                <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm">
                    <div className="p-6 aspect-square bg-orange-100 rounded-full flex items-center justify-center">
                        <Download size={28} className="text-orange-600" strokeWidth={2} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">One-Click Download</h3>
                        <p className="text-sm text-slate-600">Export your resume as PDF instantly, ready to send to recruiters and employers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};