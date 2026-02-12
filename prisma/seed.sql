USE translate_db;

-- =====================================================
-- 🌍 LANGUAGES
-- =====================================================
INSERT INTO Language (code, name, rtl, createdAt, updatedAt)
VALUES
  ('pt-BR', 'Português', false, NOW(), NOW()),
  ('en-US', 'English', false, NOW(), NOW()),
  ('es-ES', 'Español', false, NOW(), NOW()),
  ('ar-SA', 'العربية', true, NOW(), NOW());

-- =====================================================
-- 🖥️ SYSTEM (idioma padrão)
-- =====================================================
INSERT INTO `System` (languageId, createdAt, updatedAt)
VALUES
  (1, NOW(), NOW()); -- pt-BR


-- =====================================================
-- 🔌 DEVICE TYPES
-- =====================================================
INSERT INTO DeviceType (name, createdAt, updatedAt)
VALUES
  ('Android', NOW(), NOW()),
  ('iOS', NOW(), NOW()),
  ('Windows', NOW(), NOW()),
  ('MacOS', NOW(), NOW());

-- =====================================================
-- 📱 DEVICES
-- =====================================================
INSERT INTO Device (name, locationDescription, deviceTypeId, createdAt, updatedAt)
VALUES
  ('Smartphone', 'Dispositivo móvel', 1, NOW(), NOW()), -- Android
  ('Tablet', 'Dispositivo portátil de tela grande', 2, NOW(), NOW()), -- iOS
  ('Desktop', 'Computador de mesa', 3, NOW(), NOW()); -- Windows

INSERT INTO Sector (name, position, createdAt, updatedAt) VALUES
('Sala',1, NOW(), NOW()),
('Cozinha',2, NOW(), NOW()),
('Quarto',3, NOW(), NOW());

-- =====================================================
-- 🌐 TRANSLATIONS
-- entityType conventions:
-- - device
-- - device_type
-- =====================================================

INSERT INTO DeviceTypeTranslation (
  deviceTypeId,
  languageId,
  name,
  createdAt,
  updatedAt
)
VALUES
  -- =========================
  -- 🔌 Device Types
  -- =========================
  (1, 2, 'Android inglês', NOW(), NOW()),
  (1, 3, 'Android espanhol', NOW(), NOW()),
  (1, 4, 'أندرويد', NOW(), NOW()),

  (2, 2, 'iOS inglês', NOW(), NOW()),
  (2, 3, 'iOS espanhol', NOW(), NOW());