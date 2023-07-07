
export default function About() {
  return (
    <>
      <div className="mx-2 flex flex-col gap-4 px-6 py-8 rounded-xl border-2 border-sky-500/50 bg-gray-800 backdrop-blur">
        <h1 className="text-2xl font-bold text-blue-300 after:content-['_iNotebook']">
          <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
              About
          </span>
        </h1>
        <div className="text-white">
          <p>Welcome to iNotebook!</p>
          <p className="indent-10 text-jusitfy">
            iNotebook is a powerful web application designed to provide a seamless note-taking experience for users. With iNotebook, you can easily store and manage your notes in the cloud, ensuring that your valuable information is accessible anytime, anywhere.
            Built using the MERN stack (MongoDB, Express, React, and Node.js) and styled using Tailwind CSS, iNotebook offers a modern and intuitive user interface. The combination of these technologies enables a fast, efficient, and reliable note-taking platform.
          </p>
          Key Features:
          <ol className="pl-4">
              <li><strong>User Registration and Login:</strong> Each user has the ability to create a personal account and securely log in to access their notes.</li>
              <li><strong>Create, View, Update, and Delete Notes:</strong> iNotebook provides a comprehensive set of features to manage your notes effortlessly. You can create new notes, view existing ones, update their content, and delete them as needed.</li>
              <li><strong>Cloud Storage:</strong> Your notes are securely stored in the cloud, ensuring data reliability and accessibility across devices.</li>
              <li><strong>Intuitive User Interface:</strong> The user-friendly interface of iNotebook makes it easy to navigate and organize your notes effectively.</li>
          </ol>
          <p>
          Whether you’re a student, professional, or simply someone who wants to stay organized, iNotebook is your go-to solution for all your note-taking needs.
          Get started today by signing up for your personal iNotebook account and experience the convenience of managing your notes effortlessly.
          </p>
        </div>
      </div>
    </>
  )
}
