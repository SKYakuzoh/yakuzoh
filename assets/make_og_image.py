#!/usr/bin/env python3
"""Generate assets/og-image.png (1200x630) for Open Graph / Twitter cards.
Fully offline, deterministic, uses only system DejaVu fonts. No network."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (10, 10, 10)
TEXT = (224, 224, 224)
MUTED = (136, 136, 136)
ACCENT = (204, 34, 0)
ACCENT_FILL = (204, 34, 0, 38)

F_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
F_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
F_MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

img = Image.new("RGBA", (W, H), BG + (255,))
draw = ImageDraw.Draw(img)

# --- subtle radial red glow, center-right ---
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy = int(W * 0.62), int(H * 0.5)
for r, a in [(520, 8), (420, 12), (320, 18), (220, 26), (140, 34)]:
    gd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(204, 34, 0, a))
img = Image.alpha_composite(img, glow)
draw = ImageDraw.Draw(img)

# --- left accent bar ---
draw.rectangle([0, 0, 6, H], fill=ACCENT)

# --- shield mark (simplified polygon), top-left area ---
sx, sy, ss = 90, 150, 150  # shield bounding box
shield = [(sx + ss * 0.5, sy),                # top center
          (sx + ss, sy + ss * 0.18),           # top right
          (sx + ss, sy + ss * 0.58),           # mid right
          (sx + ss * 0.5, sy + ss),            # bottom point
          (sx, sy + ss * 0.58),                # mid left
          (sx, sy + ss * 0.18)]                 # top left
draw.polygon(shield, fill=ACCENT_FILL, outline=ACCENT)
# checkmark inside shield
cm_x, cm_y = sx + ss * 0.5, sy + ss * 0.5
draw.line([(cm_x - ss * 0.22, cm_y),
           (cm_x - ss * 0.05, cm_y + ss * 0.18),
           (cm_x + ss * 0.26, cm_y - ss * 0.18)],
          fill=ACCENT, width=max(3, int(ss * 0.045)), joint="curve")

# --- title "SK SECURITY" ---
f_title = ImageFont.truetype(F_BOLD, 78)
title = "SK SECURITY"
# draw "SK" in text color, "SECURITY" in accent
draw.text((260, 150), "SK ", font=f_title, fill=TEXT)
sw = draw.textlength("SK ", font=f_title)
draw.text((260 + sw, 150), "SECURITY", font=f_title, fill=ACCENT)

# --- eyebrow label (mono, red, uppercase) ---
f_eye = ImageFont.truetype(F_MONO, 26)
draw.text((262, 120), "SÉCURITÉ OFFENSIVE", font=f_eye, fill=ACCENT)

# --- subtitle ---
f_sub = ImageFont.truetype(F_REG, 33)
draw.text((262, 248), "Audit de sécurité offensive · Pentest & Red Team", font=f_sub, fill=MUTED)

# --- secondary line ---
f_sub2 = ImageFont.truetype(F_REG, 28)
draw.text((262, 300), "Active Directory · Web Application · Infrastructure", font=f_sub2, fill=MUTED)

# --- credentials + url footer ---
f_foot = ImageFont.truetype(F_MONO, 24)
draw.text((262, H - 70), "Annas RIO · CPTS (HTB) · M2i Pentesting (RS7394)", font=f_foot, fill=MUTED)
draw.text((262, H - 36), "skyakuzoh.github.io/yakuzoh", font=f_foot, fill=(85, 85, 85))

# --- flatten to RGB for max compatibility (some crawlers dislike RGBA PNG) ---
final = Image.new("RGB", (W, H), BG)
final.paste(img, (0, 0), img)
final.save("/home/yaku/githubsecurity/assets/og-image.png", "PNG", optimize=True)
print("OK og-image.png", final.size)