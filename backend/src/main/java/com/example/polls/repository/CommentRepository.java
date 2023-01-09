package com.example.polls.repository;

import com.example.polls.model.Comment;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Optional<Comment> findById(Long commentId);

    List<Comment> findByCreatedBy(Long userId);

    @Query("SELECT c FROM Comment c WHERE c.poll.id = :pollId")
    List<Comment> findByPollId(@Param("pollId") Long pollId);

    long countByCreatedBy(Long userId);

    List<Comment> findByIdIn(List<Long> commentIds);

    List<Comment> findByIdIn(List<Long> commentIds, Sort sort);
}
