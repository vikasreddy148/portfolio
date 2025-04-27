import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
const certifications = [
  {
    title: "Introduction to Front End Development",
    image: "/images/simplilearn.jpg",
    issuer: "Simplilearn",
    date: "2025",
  },

  {
    title: "Cloud Computing",
    image: "/images/cloudcomputing.jpg",
    issuer: "NPTEL",
    date: "2024",
  },
  {
    title: " Data Structures and Algorithms - Self Paced",
    image: "/images/gfg.jpg",
    issuer: "GeeksforGeeks",
    date: "2024",
  },

  {
    title: "Programming in C++: AHands-on Introduction",
    image: "/images/cpp.jpg",
    issuer: "Coursera",
    date: "2024",
  },
];




const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading mb-16">
          <span className="numbered-heading">04.</span> Certifications
        </h2>

        <div className="space-y-12">
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Trophy className="h-5 w-5 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden card-hover border-primary/20"
                >
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-card">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
