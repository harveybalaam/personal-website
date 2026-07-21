import type { Tag } from "../../../pages/PersonalProjects";
import TagButton from "../../tags/TagButton";
import TagRemovable from "../../tags/TagRemovable";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import "./TagInput.css";

interface TagInputProps {
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
  tags: Tag[];
}

export default function TagInput({
  selectedTags,
  setSelectedTags,
  tags,
}: TagInputProps) {
  const [isTagListOpen, setIsTagListOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [focusedTagIndex, setFocusedTagIndex] = useState<number | null>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);
  const tagListRef = useRef<HTMLDivElement>(null);

  const filteredTagsBySearch = tags.filter((tag) =>
    tag.text.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const selectedTagNames = selectedTags.map((tag) => tag.text);
  const availableTags = filteredTagsBySearch.filter(
    (tag) => !selectedTagNames.includes(tag.text),
  );

  const closeTagList = () => {
    setIsTagListOpen(false);
    setFocusedTagIndex(null);
  };

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

  useEffect(() => {
    if (focusedTagIndex === null || !tagListRef?.current) return;

    const tagListElements =
      tagListRef.current.querySelectorAll("button.tag.tag-btn");

    const tagToFocus = tagListElements?.[focusedTagIndex] as HTMLElement;

    tagToFocus?.focus();
  }, [availableTags, focusedTagIndex, tagListRef]);

  const handleInputOnKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    switch (key) {
      case "ArrowUp":
        if (!isTagListOpen) {
          setIsTagListOpen(true);
        }
        setFocusedTagIndex(availableTags.length - 1);
        break;
      case "ArrowDown":
        if (!isTagListOpen) {
          setIsTagListOpen(true);
        }
        setFocusedTagIndex(0);
        break;
      case "Tab":
        closeTagList();
        break;
      case "Escape":
      case "Enter":
        event.preventDefault();
        closeTagList();
        break;
      default:
        if (!isTagListOpen) setIsTagListOpen(true);
        setFocusedTagIndex(null);
    }
  };

  const handleTagListOnKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    switch (key) {
      case "ArrowUp":
        setFocusedTagIndex((prevIndex) => {
          if (prevIndex === null || prevIndex === 0) {
            return availableTags.length - 1;
          }
          return prevIndex - 1;
        });
        break;
      case "ArrowDown":
        setFocusedTagIndex((prevIndex) => {
          if (prevIndex === null || prevIndex === availableTags.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
        break;
      case "Escape":
        event.preventDefault();
        closeTagList();
        tagInputRef?.current?.focus();
        break;
      case "Tab":
        closeTagList();
        break;
      default:
        return;
    }
  };

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
    tagInputRef?.current?.focus();
  };

  const handleTagButtonKeyDown = (
    tagText: Tag["text"],
    key: KeyboardEvent["key"],
  ) => {
    if (key !== "Enter") {
      tagInputRef?.current?.focus();
      return;
    }

    setFocusedTagIndex((prevIndex) => {
      if (availableTags.length <= 1) {
        tagInputRef?.current?.focus();
        return null;
      }

      if (prevIndex === null) return 0;

      if (prevIndex === availableTags.length - 1) return prevIndex - 1;

      return prevIndex;
    });

    handleAddTag(tagText);
  };

  return (
    <div className="tag-input">
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
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={handleOnClick}
          onKeyDown={handleInputOnKeyDown}
          placeholder="Filter by tag..."
          ref={tagInputRef}
          type="text"
        />
      </div>
      {isTagListOpen && (
        <div className="tag-input-dropdown-container">
          <div
            className="border-default tag-input-dropdown-content"
            ref={tagListRef}
            onKeyDown={handleTagListOnKeyDown}
          >
            {availableTags.length > 0 ? (
              availableTags.map((tag) => (
                <TagButton
                  colour={tag.colour}
                  handleClick={handleAddTag}
                  handleKeyDown={handleTagButtonKeyDown}
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
