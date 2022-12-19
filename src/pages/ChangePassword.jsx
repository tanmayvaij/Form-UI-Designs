export default function ChangePassword() {
    return (
        <div id="changepassword" className="min-h-screen flex items-center justify-center">
            <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">

                <i className="text-4xl text-pink-500 fa-solid fa-user-lock"></i>

                <h1 className="text-2xl">Change Password</h1>

                <div>
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Type your password"  />
                </div>

                <div>
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none" placeholder="Confirm your password"  />
                </div>

                <div className="w-full">
                    <button className="bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full">Submit</button>
                </div>

            </div>
        </div>
    )
}
