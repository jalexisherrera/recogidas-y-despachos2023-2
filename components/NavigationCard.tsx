import Link from "next/link";

interface NavigationCardProps {
    title: string;
    description: string;
    href: string;
}

const NavigationCard = ({ title, description, href }: NavigationCardProps) => {
    return(
        <div className="navigation-card">
            <Link href = {href}>
                <div className="flex flex-col items-center">
                    <h2>{title}</h2>
                    <span>{description}</span>
                </div>
                </Link>
                </div>

    );
    
};
export { NavigationCard};