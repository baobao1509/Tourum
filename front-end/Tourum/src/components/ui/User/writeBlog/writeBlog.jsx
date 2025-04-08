import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ArrowLeft, Image, Tags, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './writeBlog.css';

const WriteBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý khi người dùng nhấn nút Publish
    console.log({
      title,
      content,
      location,
      tags,
      coverImage
    });
  };

  return (
    <div className="write-blog-container">
      <header className="write-blog-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft className="icon" />
          Back to Home
        </button>
        <button className="btn-primary publish-button" onClick={handleSubmit}>
          Publish
        </button>
      </header>

      <main className="write-blog-main">
        <div className="blog-form">
          {/* Phần upload ảnh bìa */}
          <div className="cover-image-section">
            {previewImage ? (
              <div className="image-preview">
                <img src={previewImage} alt="Cover preview" />
                <button 
                  className="change-image-btn" 
                  onClick={() => document.getElementById('cover-image').click()}
                >
                  Change Cover Image
                </button>
              </div>
            ) : (
              <div 
                className="upload-placeholder" 
                onClick={() => document.getElementById('cover-image').click()}
              >
                <Image className="icon" />
                <p>Click to upload cover image</p>
              </div>
            )}
            <input
              type="file"
              id="cover-image"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          {/* Phần nội dung blog */}
          <div className="blog-content">
            {/* Tiêu đề */}
            <input
              type="text"
              className="title-input"
              placeholder="Enter your blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Metadata */}
            <div className="metadata-section">
              <div className="input-group">
                <MapPin className="icon" />
                <input
                  type="text"
                  placeholder="Add location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="input-group">
                <Tags className="icon" />
                <input
                  type="text"
                  placeholder="Add tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>

            {/* CKEditor */}
            <div className="editor-container">
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  setContent(editor.getData());
                }}
                config={{
                  toolbar: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'blockQuote',
                    'undo',
                    'redo'
                  ],
                  placeholder: 'Start writing your amazing blog post...'
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WriteBlog;
