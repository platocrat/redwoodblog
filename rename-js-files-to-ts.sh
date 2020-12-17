# Make sure to give this file execute permission:
#
# chmod +x /path/to/yourscript.sh
#
# Then you can run the script as you normally would.
# FOR JSX (you'll need to manually convert config files in ./web)
find ./web/src/components -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.tsx"' {} \;
find ./web/src/layouts -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.tsx"' {} \;
find ./web/src/pages -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.tsx"' {} \;

# FOR PURE JS
find ./api/ -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.ts"' {} \;