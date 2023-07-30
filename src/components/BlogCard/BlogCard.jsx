import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

import { postingDate } from 'helpers/postingDate';

export const BlogCard = ({
  article: { _id, name, postedAt, poster, tag, title, description, avatar },
}) => {
  return (
    <Card id={_id}>
      <CardHeader>
        <CardPoster src={poster} alt="card__image" />
      </CardHeader>
      <CardBody>
        <Tag>{tag}</Tag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src={avatar} alt={name} />
          <UserInfo>
            <UserName>{name}</UserName>
            <Date>{postingDate(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
};
