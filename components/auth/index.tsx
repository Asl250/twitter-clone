import Button from '@/components/ui/button'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export default function Auth() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
			<Image
				src={"/images/x.svg"}
				alt="x"
				width={400}
				height={400}
				className="justify-self-senter hidden md:block"
			/>
			
				<div className="flex flex-col md:justify-between justify-center h-full gap-6 md:h-[70%]">
					<div className="block md:hidden">
						<Image
							src={"/images/x.svg"}
							alt="x"
							width={150}
							height={150}
							className="justify-self-senter"
						/>
					</div>
					<h1 className="text-6xl font-bold">Happening now</h1>
					<div className='md:w-[60%] w-full'>
						<h2 className='font-bold text-3xl mb-4'>Join Twitter.</h2>
						<div className='flex flex-col space-y-2'>
							<Button label={
								<div className="flex gap-2 items-center justify-center">
									<FcGoogle />
									Sign up with Google
								</div>
							} fullWidth secondary />
							<Button label={
								<div className="flex gap-2 items-center justify-center">
									<AiFillGithub />
									Sign up with Github
								</div>
							} fullWidth secondary />
							<div className='flex items-center justify-center'>
								<div className='h-px bg-gray-700 w-1/2' />
								<p className="mx-4">or</p>
								<div className='h-px bg-gray-700 w-1/2' />
							</div>
							<Button label={"Create account"} fullWidth />
							<div className="text-[10px] text-gray-400">
								By signing up, you agree to the{" "}
								<span className="text-sky-500">Terms of Service</span> and
								<span className="text-sky-500"> Privacy Policy</span>, including
								<span className="text-sky-500"> Cookie Use</span>.
							</div>
						</div>
					</div>
					<div className="md:w-[60%] w-ful">
						<h3 className="font-medium text-xl mb-4">Alredy have an account?</h3>
						<Button label={"Sign in"} fullWidth outline />
					</div>
				</div>
			</div>
		</>
	
	)
}
