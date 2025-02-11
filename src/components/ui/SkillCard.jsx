import PropTypes from 'prop-types';
import Card from './Card';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardContent } from './CardContent';

export function SkillCard({ title, skills }) {
  return (
    <Card className="transform transition-transform duration-200 hover:scale-105">
      <CardHeader className="bg-gray-50 flex justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <span className="text-xs font-semibold text-white bg-blue-500 px-2 py-1 rounded">Junior</span>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index} className="text-sm font-medium text-black mb-1">{skill.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillCard;
