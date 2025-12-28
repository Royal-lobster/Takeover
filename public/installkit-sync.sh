#!/bin/bash
#
# ██╗███╗   ██╗███████╗████████╗ █████╗ ██╗     ██╗     ██╗  ██╗██╗████████╗
# ██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██║     ██║     ██║ ██╔╝██║╚══██╔══╝
# ██║██╔██╗ ██║███████╗   ██║   ███████║██║     ██║     █████╔╝ ██║   ██║
# ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║     ██║     ██╔═██╗ ██║   ██║
# ██║██║ ╚████║███████║   ██║   ██║  ██║███████╗███████╗██║  ██╗██║   ██║
# ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝
#
# 🚀 InstallKit Brew Package Sync Script
#
# What this script does:
# 1. Safely scans your Homebrew installation for installed packages
# 2. Creates a shareable InstallKit URL with your current setup
# 3. Optionally creates a short URL for easy sharing
#
# This script is 100% read-only and transparent:
# ✅ Only reads your Homebrew package list (no modifications)
# ✅ No data sent to external services (except for optional URL shortening)
# ✅ No system changes or installations
# ✅ Open source - you can inspect every line
#
# Usage: ./installkit-sync.sh [--short|-s] [--help|-h]
#
# Source: https://github.com/Royal-lobster/InstallKit
# License: MIT
#

# Exit on any error for safety
set -e

# Parse command line arguments safely
# This allows users to request shortened URLs or get help
CREATE_SHORT_URL=false
while [[ $# -gt 0 ]]; do
    case $1 in
        -s|--short)
            CREATE_SHORT_URL=true  # Enable URL shortening
            shift
            ;;
        -h|--help)
            echo "InstallKit Sync - Generate shareable package lists from your Homebrew setup"
            echo
            echo "Usage: $0 [OPTIONS]"
            echo
            echo "Options:"
            echo "  -s, --short    Create a shortened URL (easier to share)"
            echo "  -h, --help     Show this help message"
            echo
            echo "Examples:"
            echo "  $0              # Generate regular InstallKit URL"
            echo "  $0 --short      # Generate shortened InstallKit URL"
            echo
            echo "What this script does:"
            echo "• Scans your installed Homebrew packages (read-only)"
            echo "• Creates a shareable InstallKit URL"
            echo "• Optionally shortens the URL for easy sharing"
            echo
            exit 0
            ;;
        *)
            echo "❌ Unknown option: $1"
            echo "💡 Use --help for usage information"
            exit 1
            ;;
    esac
done

# Define colors for beautiful terminal output
# These make the script output more readable and user-friendly
RED='\033[0;31m'     # For errors
GREEN='\033[0;32m'   # For success messages
BLUE='\033[0;34m'    # For info messages
YELLOW='\033[1;33m'  # For warnings and progress
NC='\033[0m'         # Reset color

# Safety check: Ensure Homebrew is installed
# We can't proceed without Homebrew since that's what we're scanning
if ! command -v brew &> /dev/null; then
    echo -e "${RED}❌ Error: Homebrew is not installed or not in PATH${NC}"
    echo "📥 Please install Homebrew first: https://brew.sh"
    echo "💡 Homebrew is required to use InstallKit's package detection"
    exit 1
fi

# Welcome message - let users know what's happening
echo -e "${BLUE}🍺 InstallKit Brew Package Detection${NC}"
echo "🔍 Scanning your installed Homebrew packages..."
echo "📋 This will create a shareable list of your current setup"
echo

# Get the current user's name from their home directory
# This creates a personalized title like "john's brew packages"
USERNAME=$(basename "$HOME")

# Scan for installed packages - this is completely read-only!
# We check both casks (GUI apps) and formulae (CLI tools)
echo -e "${YELLOW}📦 Detecting installed packages...${NC}"

# Get all installed casks (GUI applications like Chrome, VS Code, etc.)
# The 2>/dev/null suppresses any error messages if no casks are installed
CASKS=$(brew list --cask 2>/dev/null | tr '\n' ',' | sed 's/,$//')

# Get all installed formulae (command-line tools like git, node, etc.)
# The 2>/dev/null suppresses any error messages if no formulae are installed
FORMULAE=$(brew list --formula 2>/dev/null | tr '\n' ',' | sed 's/,$//')

# Combine both casks and formulae into one list
# This gives us a complete picture of everything installed via Homebrew
ALL_PACKAGES=""
if [ ! -z "$CASKS" ]; then
    ALL_PACKAGES="$CASKS"
fi
if [ ! -z "$FORMULAE" ]; then
    if [ ! -z "$ALL_PACKAGES" ]; then
        ALL_PACKAGES="$ALL_PACKAGES,$FORMULAE"  # Combine with comma separator
    else
        ALL_PACKAGES="$FORMULAE"
    fi
fi

# Safety check: Make sure we found at least some packages
if [ -z "$ALL_PACKAGES" ]; then
    echo -e "${YELLOW}⚠️  No Homebrew packages found${NC}"
    echo "💡 Install some apps with Homebrew first, then run this script again"
    echo "📚 Learn more: https://brew.sh"
    exit 0
fi

# Count how many packages we found (for user feedback)
PACKAGE_COUNT=$(echo "$ALL_PACKAGES" | tr ',' '\n' | wc -l | tr -d ' ')

echo -e "${GREEN}✅ Found $PACKAGE_COUNT installed packages${NC}"
echo "📱 Casks (GUI apps): $(echo "$CASKS" | tr ',' '\n' | wc -l | tr -d ' ')"
echo "⚡ Formulae (CLI tools): $(echo "$FORMULAE" | tr ',' '\n' | wc -l | tr -d ' ')"
echo

# Create URL-safe encoded strings for the InstallKit web app
# We need to encode special characters so they work properly in URLs
echo -e "${BLUE}🔗 Generating your InstallKit URL...${NC}"

# Create a personalized title (e.g., "john's brew packages")
# URL encoding: spaces become '+', apostrophes become '%27'
TITLE_ENCODED=$(printf "%s's brew packages" "$USERNAME" | sed 's/ /+/g' | sed "s/'/\%27/g")

# Encode the package list for URL use
# Commas become '%2C' so they don't break the URL structure
PACKAGES_ENCODED=$(echo "$ALL_PACKAGES" | sed 's/,/%2C/g')

# Build the complete InstallKit URL with all parameters
# This URL will pre-select all your installed packages in the web app
INSTALLKIT_URL="https://installkit.vercel.app?name=$TITLE_ENCODED&packages=$PACKAGES_ENCODED"

echo -e "${BLUE}🔗 Your InstallKit Share URL:${NC}"
echo "$INSTALLKIT_URL"

# Optional URL shortening service (only if user requested it)
# This makes long URLs more shareable on social media, chat, etc.
if [ "$CREATE_SHORT_URL" = true ]; then
    echo
    echo -e "${YELLOW}🔗 Creating short URL for easier sharing...${NC}"

    # Function to safely create shortened URLs with fallback options
    # We try two different services to ensure reliability
    create_short_url() {
        local long_url="$1"

        # Verify curl is available (needed for HTTP requests)
        if ! command -v curl &> /dev/null; then
            echo -e "${RED}❌ Error: curl is required for URL shortening${NC}"
            return 1
        fi

        echo -e "${YELLOW}🔄 Trying spoo.me URL shortener...${NC}"

        # Primary option: spoo.me (free, reliable service)
        # We send a JSON request with the long URL
        local response=$(curl -s -X POST "https://spoo.me/api/v1/shorten" \
            -H "Content-Type: application/json" \
            -d "{\"long_url\":\"$long_url\"}" \
            --connect-timeout 5 --max-time 10 2>/dev/null || echo "")

        # Parse the JSON response to extract the shortened URL
        if [ ! -z "$response" ]; then
            local short_url=$(echo "$response" | grep -o '"short_url":"[^"]*"' | cut -d'"' -f4)
            if [ ! -z "$short_url" ]; then
                echo "$short_url"
                return 0
            fi
        fi

        echo -e "${YELLOW}🔄 Fallback: Trying is.gd URL shortener...${NC}"

        # Fallback option: is.gd (simple, reliable backup)
        # We need to URL-encode the long URL for the GET request
        local encoded_url=$(printf '%s' "$long_url" | sed 's/:/%3A/g; s|/|%2F|g; s/?/%3F/g; s/&/%26/g; s/=/%3D/g; s/+/%2B/g; s/ /%20/g')
        response=$(curl -s "https://is.gd/create.php?format=simple&url=$encoded_url" \
            --connect-timeout 5 --max-time 10 2>/dev/null || echo "")

        # Validate the response looks like a proper is.gd URL
        if [ ! -z "$response" ] && [[ "$response" =~ ^https://is.gd/ ]]; then
            echo "$response"
            return 0
        fi

        return 1  # Both services failed
    }

    # Attempt to create the short URL
    SHORT_URL=$(create_short_url "$INSTALLKIT_URL")
    if [ $? -eq 0 ] && [ ! -z "$SHORT_URL" ]; then
        echo -e "${GREEN}✅ Short URL created successfully:${NC}"
        echo "$SHORT_URL"
    else
        echo -e "${YELLOW}⚠️  Could not create short URL (services might be down)${NC}"
        echo "💡 Don't worry! Your original URL works perfectly fine."
    fi
fi

        # Try spoo.me first
        local response=$(curl -s -X POST "https://spoo.me/api/v1/shorten" \
            -H "Content-Type: application/json" \
            -d "{\"long_url\":\"$long_url\"}" \
            --connect-timeout 5 --max-time 10 2>/dev/null || echo "")

        if [ ! -z "$response" ]; then
            local short_url=$(echo "$response" | grep -o '"short_url":"[^"]*"' | cut -d'"' -f4)
            if [ ! -z "$short_url" ]; then
                echo "$short_url"
                return 0
            fi
        fi

        # Fallback to is.gd
        local encoded_url=$(printf '%s' "$long_url" | sed 's/:/%3A/g; s|/|%2F|g; s/?/%3F/g; s/&/%26/g; s/=/%3D/g; s/+/%2B/g; s/ /%20/g')
        response=$(curl -s "https://is.gd/create.php?format=simple&url=$encoded_url" \
            --connect-timeout 5 --max-time 10 2>/dev/null || echo "")

        if [ ! -z "$response" ] && [[ "$response" =~ ^https://is.gd/ ]]; then
            echo "$response"
            return 0
        fi

        return 1
    }

    SHORT_URL=$(create_short_url "$INSTALLKIT_URL")
    if [ $? -eq 0 ] && [ ! -z "$SHORT_URL" ]; then
        echo -e "${GREEN}✅ Short URL created:${NC}"
        echo "$SHORT_URL"
    else
        echo -e "${YELLOW}⚠️  Could not create short URL (services might be down)${NC}"
        echo "💡 Don't worry! Your original URL works perfectly fine."
    fi
fi

# Final success message with helpful instructions
echo
echo -e "${GREEN}🎉 Success! Your InstallKit URL is ready to share!${NC}"
echo
echo "💡 What you can do with this URL:"
echo "• 📋 Copy and paste it to share your setup with others"
echo "• 💬 Send it via email, Slack, or social media"
echo "• 🔄 Use it to quickly reinstall all apps on a new Mac"
echo "• 👥 Help teammates get the same development environment"
echo
echo -e "${BLUE}🔒 Privacy Note:${NC}"
echo "This URL only contains the names of your installed packages."
echo "No personal data, files, or system information is included."
echo
echo -e "${YELLOW}📖 Learn more about InstallKit:${NC}"
echo "🌐 Website: https://installkit.vercel.app"
echo "📚 Source: https://github.com/Royal-lobster/InstallKit"