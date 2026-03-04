import { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Disclaimer - DotGUI',
  description: 'DotGUI Disclaimer',
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-accent-cyan mb-8">
          Disclaimer
        </h1>

        <div className="bg-black/30 rounded-lg p-6 space-y-4">
          <p className="text-accent-light text-lg">
            I, DotLYHiyou, owner and sole maintainer of Zenithub, am not responsible for any trouble you have gotten yourself into using my site.
          </p>
          <p className="text-accent-light text-lg">
            Your choice to use my site in whatever situation it was inappropriate is merely self-conscious.
          </p>
          
          <h2 className="text-2xl font-bold text-accent-cyan mt-8 mb-4">
            As for teachers who caught their students,
          </h2>
          
          <p className="text-accent-light text-lg">
            I am not in the wrong for giving this site and all related materials for easy access to people like your student.
          </p>
          <p className="text-accent-light text-lg">
            I, despite what it seems most of the time, dispise kiddos who decide to play games while not doing work.
          </p>
          <p className="text-accent-light text-lg">
            Its best you give them a moderate punishment, such as taking away their device, and maybe talking to their parents.
          </p>
          <p className="text-accent-light text-lg">
            I wouldn't go too far in the punishment, unless they are doing repeat offenses. Then I suggest just doing what you see fit.
          </p>
          
          <h1 className="text-3xl font-bold text-center text-red-500 mt-8">
            USERS. YOU HAVE BEEN WARNED.
          </h1>
        </div>
      </main>
    </div>
  )
}
