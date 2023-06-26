import React from "react";
import ForumNavigation from "../components/ForumNav";
import FooterNav from "../components/Footer";

const ForumPage = () => {
  return (
    <>
      <ForumNavigation />
      <div className="container mx-auto py-10">
        <div className="flex">
          <div className="w-1/4 pr-8">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Forum Categories</h2>
              <ul className="space-y-2">
                <li className="text-blue-800 hover:text-blue-700">
                  <a href="/diabetes-nutrition">Diabetes Nutrition</a>
                </li>
                <li className="text-blue-800 hover:text-blue-700">
                  <a href="/diabetes-recipes">Diabetes Recipes</a>
                </li>
                <li className="text-blue-800 hover:text-blue-700">
                  <a href="/fitness-exercise">Fitness and Exercise</a>
                </li>
                {/* Add more forum categories as desired */}
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
              <p className="text-gray-600">
                Welcome to our Diabetic Community! We strive to create a
                supportive and respectful environment where members can freely
                discuss topics related to diabetes, nutrition, and overall
                well-being. To ensure a positive experience for everyone, we
                kindly ask you to adhere to the following guidelines:
              </p>
              <ul className="list-disc ml-6 mt-4 text-gray-600">
                <li>
                  Be respectful and considerate towards other members. Treat
                  others with kindness and empathy.
                </li>
                <li>
                  Avoid offensive or discriminatory language, including hate
                  speech and personal attacks.
                </li>
                <li>
                  Stay on-topic and relevant to the discussions within each
                  forum category.
                </li>
                <li>
                  Share accurate and helpful information. Cite your sources
                  whenever possible.
                </li>
                <li>
                  Refrain from promoting or endorsing any products or services
                  without prior approval.
                </li>
                <li>
                  Report any inappropriate behavior or content to the moderators
                  for review.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                By participating in our community, you agree to abide by these
                guidelines and contribute to fostering a positive and supportive
                environment for all members. Let's learn, share, and support
                each other on our journey towards better health and well-being!
              </p>
            </div>
          </div>

          <div className="w-3/4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">
                  Diabetes Nutrition Tips
                </h2>
                <p className="text-gray-600 mb-4">
                  Share and discuss nutrition tips and tricks for managing
                  diabetes.
                </p>
                <a
                  href="/diabetes-nutrition"
                  className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
                >
                  View Discussions
                </a>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Diabetes Recipes</h2>
                <p className="text-gray-800 mb-4">
                  Explore and share delicious diabetic-friendly recipes.
                </p>
                <a
                  href="/diabetes-recipes"
                  className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
                >
                  View Discussions
                </a>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Fitness and Exercise</h2>
                <p className="text-gray-800 mb-4">
                  Discuss exercise routines and fitness tips for managing
                  diabetes.
                </p>
                <a
                  href="/fitness-exercise"
                  className="inline-block px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700"
                >
                  View Discussions
                </a>
              </div>

              {/* Add more forum categories as desired */}
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </>
  );
};

export default ForumPage;
