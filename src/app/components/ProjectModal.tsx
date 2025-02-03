import type React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { X } from "lucide-react";
import { Badge } from "@/app/components/ui/Badge";

interface ProjectModalProps {
  project: {
    title: string;
    technologies: string[];
    achievements: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project || !isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black">
        <CardHeader className="relative">
          <CardTitle className="text-3xl">{project.title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="font-semibold text-xl mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-xl mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectModal;
