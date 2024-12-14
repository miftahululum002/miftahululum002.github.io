'use client'
interface PortfolioProps {
    title: string;
    portfolios: Array<{
        id: number;
        name: string;
        shortname: string;
        image: string;
        technology: string;
        link: string;
        year: string;
        description: string;
    }>;
}

export default function Portfolio({ portfolios, title }: PortfolioProps) {
    return (
        <div className="container w-full text-sm my-10">
            <h2 className="section-title">{title}</h2>
            <table className="w-full border-collapse border-primary">
                <thead className="py-4">
                    <tr className="border-top-bottom">
                        <th className="w-1/12 py-3">No</th>
                        <th className="w-1/2 py-3 text-start">Project</th>
                        <th className="w-1/5 py-3 text-start">Description</th>
                        <th className="w-1/12 py-3 text-start">Technology</th>
                        <th className="w-1/12 py-3 text-start">Year</th>
                        <th className="w-1/12 py-3 text-start">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolios.map((portfolio, index) => (
                        <tr key={index} className="border-top-bottom">
                            <td className="text-center">{index + 1}</td>
                            <td><span dangerouslySetInnerHTML={{ __html: portfolio.name }} /></td>
                            <td className="font-medium">{portfolio.description}</td>
                            <td className="font-medium">{portfolio.technology}</td>
                            <td className="font-medium">{portfolio.year}</td>
                            <td className="text-center">
                                <a className="text-primary font-bold hover:text-secondary" href={portfolio.link} target="_blank">Link</a>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}