import type { Tag } from "../../../pages/PersonalProjects";
import TagButton from "../../TagButton";
import TagRemovable from "../../TagRemovable";
import { useEffect, useRef, useState } from "react";
import "./TagInput.css";

interface TagInputProps {
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  setTagsSearchValue: React.Dispatch<React.SetStateAction<string>>;
  tags: Tag[];
}

export default function TagInput({
  selectedTags,
  setSelectedTags,
  setTagsSearchValue,
  tags,
}: TagInputProps) {
  const [isTagListOpen, setIsTagListOpen] = useState(false);
  const tagInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const tagInputElement = tagInputRef?.current;
      if (
        tagInputElement &&
        event.target instanceof Node &&
        !tagInputElement.contains(event.target)
      ) {
        setIsTagListOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [tagInputRef]);

  const handleOnClick = () => {
    setIsTagListOpen(true);
  };

  const handleAddTag = (tagText: Tag["text"]) => {
    if (selectedTags.find((tag) => tag.text === tagText)) return;

    const tagToAdd = tags.find((tag) => tag.text === tagText);
    if (!tagToAdd) return;

    setSelectedTags([...selectedTags, tagToAdd]);
  };

  const handleRemoveTag = (tagText: Tag["text"]) => {
    setSelectedTags(selectedTags.filter((tag) => tag.text !== tagText));
  };

  const selectedTagNames = selectedTags.map((tag) => tag.text);
  const availableTags = tags.filter(
    (tag) => !selectedTagNames.includes(tag.text),
  );

  return (
    <div className="tag-input" ref={tagInputRef}>
      <div className="border-default tag-input-container">
        {selectedTags.map((tag) => (
          <TagRemovable
            colour={tag.colour}
            onRemove={handleRemoveTag}
            key={tag.text}
            text={tag.text}
          />
        ))}
        <input
          name="tag-input"
          onChange={(e) => setTagsSearchValue(e.target.value)}
          onClick={handleOnClick}
          placeholder="Filter by tag..."
          type="text"
        />
      </div>
      {isTagListOpen && (
        <div className="tag-input-dropdown-container">
          <div className="border-default tag-input-dropdown-content">
            {availableTags.length > 0 ? (
              availableTags.map((tag) => (
                <TagButton
                  colour={tag.colour}
                  handleClick={handleAddTag}
                  key={tag.text}
                  text={tag.text}
                />
              ))
            ) : (
              <p className="italic-sm">
                No tags matched your search, or there are none available to add
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
