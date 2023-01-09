package com.example.polls.repository;

import com.example.polls.model.Topic;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TopicRepository extends JpaRepository<Topic, Long> {

    Optional<Topic> findById(Long topicId);

    Optional<Topic> findByName(String topicName);

    List<Topic> findByIdIn(List<Long> topicIds);

    List<Topic> findByIdIn(List<Long> topicIds, Sort sort);
}
