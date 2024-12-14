'use client'
interface CertificateProps {
    certificates: Array<{
        id: number;
        name: string;
        date: string;
        expired: string;
        link: string[];
    }>;
}

export default function Certificate({ certificates }: CertificateProps) {
    return (
        <div className="container w-full text-sm my-10">
            <h2 className="section-title">Pelatihan dan Sertifikasi</h2>
            <table className="w-full border-collapse border-primary">
                <thead className="py-4">
                    <tr className="border-top-bottom">
                        <th className="w-1/12 py-3">No</th>
                        <th className="w-1/2 py-3 text-start">Name</th>
                        <th className="w-1/5 py-3 text-start">Date</th>
                        <th className="w-1/12 py-3 text-start">Expired Date</th>
                        <th className="w-1/12 py-3 text-start">Certificate</th>
                    </tr>
                </thead>
                <tbody>
                    {certificates.map((certificate, index) => (
                        <tr key={index} className="border-top-bottom">
                            <td className="text-center">{index + 1}</td>
                            <td><span dangerouslySetInnerHTML={{ __html: certificate.name }} /></td>
                            <td className="font-medium">{certificate.date}</td>
                            <td className="font-medium">{certificate.expired}</td>
                            <td className="text-center">
                                {certificate.link.map((url, linkIndex) => (
                                    <div key={linkIndex}>
                                        <a href={url} target="_blank" className="text-primary font-bold hover:text-secondary" rel="noopener noreferrer">Link {linkIndex + 1}</a>
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}