import Contact from "@/components/contact";

const Footer = () => {
    return ( 
        <footer id="contact" className="text-center py-6 mt-10 text-sm text-gray-500 dark:text-gray-400">
            <Contact />
            <div>
            <p className="text-center py-4">&copy; {new Date().getFullYear()} Mahdi Bagheri. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;