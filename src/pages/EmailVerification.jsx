import { Link } from "react-router-dom";

export default function EmailVerification() {
    return (
        <div id="emailverification" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <i className="text-5xl text-pink-500 fa-solid fa-envelope-circle-check"></i>

                <h1 className="text-2xl text-center">Verify your email address</h1>

                <div className="text-center text-gray-700 max-w-lg">
                    <p>
                        You have entered <span className="text-blue-600">tanmayvaij22@gmail.com</span> as the email address for your account.
                    </p> 
                    <p>
                        Please verify this email address by clicking below button.
                    </p>
                </div>

                <div className="w-full">
                    <button className="bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full">Verify your email</button>
                </div>

                <div className="text-center text-gray-700 ">
                    <p className="text-sm">Or copy and paste this link into your browser</p>
                    <Link className="text-xs text-blue-500 hover:underline">https://www.ukcompany.com/verifyemail?=tanmayvaij22%40gmail.com</Link>
                </div>

            </div>
        </div>
    )
}
