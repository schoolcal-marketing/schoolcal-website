import Link from "next/link";
import Image from "next/image";

export default function CustomerStory() {
  return (
    <div className="bg-background-white border border-border rounded-lg p-6 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="heading-3 text-text-black mb-4">
          "The payoff was immediate and very obvious."
        </h3>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 flex-shrink-0">
            {/* Placeholder for Willy Felton's headshot - replace with actual image */}
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg">
              WF
            </div>
          </div>
          <div className="min-w-0">
            <p className="body-small text-text-dark-blue"><strong>Willy Felton</strong>, Director of Information Technology at Seattle Academy</p>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-6">
        <blockquote className="body-small text-text-dark-blue leading-relaxed">
          "[Onboarding] was very easy. We ran a test on a my account and some dummy accounts. I flipped it on just for faculty just so they could see things, and <span className="bg-accent-vanilla px-1 rounded">it caused an immediate celebration</span>... an uproar in the best sense of the word. And then once we pushed those out to students, (again, I didn't need to do any training, I didn't need to go ask about it to people). It was just <span className="bg-accent-vanilla px-1 rounded">100% celebration once it just showed up on their calendar because it really made things a lot easier</span>. The payoff was immediate and very obvious."
        </blockquote>
      </div>

      <div className="mt-auto">
        <Link 
          href="/stories/seattle-academy" 
          className="text-primary underline hover:text-primary-dark transition-colors duration-300 body-medium font-medium"
        >
          Watch The Story
        </Link>
      </div>
    </div>
  );
}
