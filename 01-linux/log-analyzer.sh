#!/bin/bash
set -e
set -u
set -o pipefail

LOG_FILE="01-linux/sample-log.txt"
if [ ! -f "$LOG_FILE" ]; then
  echo "Error: File '$LOG_FILE' does not exist."
  exit 1
fi

TOTAL_LINES=$(wc -l < "$LOG_FILE")
INFO_COUNT=$(grep -c "INFO" "$LOG_FILE" 2>/dev/null)
WARNING_COUNT=$(grep -c "WARNING" "$LOG_FILE" 2>/dev/null)
ERROR_COUNT=$(grep -c "ERROR" "$LOG_FILE" 2>/dev/null)
IP_ADDRESSES=$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' "$LOG_FILE" 2>/dev/null | sort | uniq)

echo "========== LOG ANALYSIS REPORT =========="
echo "File: $LOG_FILE"
echo "Total Lines: $TOTAL_LINES"
echo "----------------------------"
echo "INFO:$INFO_COUNT"
echo "WARNING:$WARNING_COUNT"
echo "ERROR:$ERROR_COUNT"
echo "-----------------------------"

if [ -z "$IP_ADDRESSES" ]; then
    echo "  (No IP addresses found)"
else
    echo "$IP_ADDRESSES" | while read -r ip; do
        echo "  - $ip"
    done
fi
