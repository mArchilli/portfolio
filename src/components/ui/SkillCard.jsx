import { PropTypes } from 'prop-types';
import Card from './Card';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardContent } from './CardContent';
import { Progress } from './Progress';

export function SkillCard({ title, skills }) {
  return (
    <Card className="transform transition-transform duration-200 hover:scale-105">
      <CardHeader className="bg-gray-50">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-black">{skill.name}</span>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <Progress value={skill.level} max={100} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Validación de props
SkillCard.propTypes = {
  title: PropTypes.string.isRequired, // title debe ser una cadena
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // name debe ser una cadena
      level: PropTypes.number.isRequired,  // level debe ser un número
    })
  ).isRequired, // skills debe ser un array de objetos
};

export default SkillCard;
