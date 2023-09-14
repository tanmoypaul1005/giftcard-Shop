/* eslint-disable @next/next/no-html-link-for-pages */
const Demo = () => {
    return ( 
        <div className="text-center">
            <h1 className="text-5xl mt-10">Demo Page</h1>
            <ul className="list-disc">
                <li><a className="text-blue-400 underline" href="/demo/InputDemo">Input Demo</a></li>
                <li><a className="text-blue-400 underline" href="/demo/CardDemo">Card Demo</a></li>
                <li><a className="text-blue-400 underline" href="/demo/DropdownDemo">Dropdown Demo</a></li>
                <li><a className="text-blue-400 underline" href="/demo/WizardDemo">Wizard Demo</a></li>
                <li><a className="text-blue-400 underline" href="/demo/ToastrDemo">Toastr Demo</a></li>
            </ul>
        </div>
     );
}
 
export default Demo;