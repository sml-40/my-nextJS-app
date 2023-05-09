export default function Hello() {
	return (
		<>
			<h1>Learn NextJS</h1>
			<p>
				NextJS is a framework for ReactJS. Building a file-based routing system
				with NextJS. Next.js has a file system built on the concept of pages.
				Whenever a new file is added to the pages directory, it automatically
				creates a new route. Everything happens behind the scene with a minimum
				of configuration. This is simple as that and it is also very simple to
				set up. Let's see how this works. So every new page must be added inside
				the directory pages. We already have the pages index at the route URL.
				This is the component of index.js which is visible at the route
				localhost 3000. Then we have the file hello.js which is available at
				localhost:3000/hello. Next we're going to create about.js which will
				then be available at the routes which will be automatically created
				behind the scene which is then going to be visible at
				localhost:3000/about. So we go back to the code editor and we're going
				to see how this works step-by-step with more examples. So that's going
				to be the same process which is to create a new file, a new component,
				then a new route is created automatically. So I'm going to go here to
				pages and create about.js and I'm going to do the same as for hello,
				create a new component that I'm going to export default and I'm going to
				name this one about. Same I'm going to return and we're going to read
				for now simply about next.js and that's all there is to it. So I'm going
				to make sure to start my app with NPM run dev. So make sure to move to
				my next app and run NPM run dev. So we already have a route which is
				named hello and then I'm going to go to the new route which is about and
				here you go. So now you can read about next.js. So we're going to
				continue with the same process and example. So for the next part of the
				demonstration, I'm going to create a brand new directory inside pages.
				So I'm going to name this one learn. So let's say that we want to create
				a documentation. So a site to have documentations about different
				JavaScript technologies. So I'm creating this directory learn and inside
				I'm going to create another file that I'm going to name next.js. And
				inside it's going to be about the same. We're going to create a
				component, same steps and this time we're going to read. So it doesn't
				really matter the name of the component. What matters is the name of the
				file because it's going to create a route based on the name of the file.
				And inside, we're going to read learn next.js. So here we go. And now we
				go back to the browser and we're going to be able to access this content
				by going to the route learn then next. And here you go. We should read
				learn next.js. And remember that the naming of the component doesn't
				really matter itself. What you should keep in mind is that the name of
				the route matches and must match the name of the JavaScript file. For
				example, if you decide to change the name of this file which is next.js,
				I'm going to rename this one to next.js like so. Let's go back to the
				browser and now you can see that the page is not found because it
				doesn't match this route, doesn't match any filename. So we're going to
				change here to next.js and here is our page which is back because now
				the route next.js matches the name of the file. So each JavaScript file
				defined inside the pages directory exports a react component that
				represents a route that the user can navigate to. With the file based
				system provided by next.js, you now have a fully functional file based
				routing system allowing to navigate between pages in your application.
			</p>
		</>
	);
}
